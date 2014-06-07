//Note; just mucked up for now.

var date = new Date();

var elements = {}

function ge(element_id)  // Assumes ids do not get added afterwards!
{  got = elements[element_id]
   if(got == null)
   { element = document.getElementById(element_id);
     if(element == null)
     { elements[element_id] = 'none'; }
     else
     { elements[element_id] = element
       got = element;
     }
   }
   else if(got == 'none')
   { return null; }
   return got
}

function ge_set_innerHTML(element_id, innerHTML, className)
{ got = ge(element_id)
  if( got!=null )
  { if(innerHTML != null){ got.innerHTML = innerHTML; }
    if(className != null){ got.className = className; }
  }
}

var spend_time  = document.getElementById("spend_time");
var spend_addr  = document.getElementById("spend_addr");

var amount_note     = document.getElementById("amount_note");
var spend_addr_note = document.getElementById("spend_addr_note");

var increment_buttons_p = false;
var increment_buttons = [["+5sec", 5], ["+1min", 60], ["+10min", 600], ["+1hour", 3600], 
                         ["+1day", 86400], ["+1week", 604800], ["+1month", 2592000]]

var vote_address = "TODO";

//secretToAddress(_a):
var own_address = "TODO"; 

// NOTE: really inconvenient without good state-of-blockchain tracking.
var participated = {};

var var_from_time = 0; //eth.getStorageAt(vote_address, own_address);
function from_time()
{   return var_from_time; }

function power_available()  // Amount of time available to spend.
{   return Math.floor(date.getTime()/1000 - from_time()); }

var var_registered = 0;
function registered()
{   return var_registered; }

function power_spent()
{   return from_time()/1 - registered()/1; }

function to_time_string(t, upto)
{
    s  = Math.floor(t);
    m  = Math.floor(s/60);
    h  = Math.floor(m/60);
    d  = Math.floor(h/24);

    s = (s%60).toString();
    m = (m%60).toString();
    h = (h%24).toString();
    if( s.length == 1 ){ s = '0' + s; }
    if( m.length == 1 ){ m = '0' + m; }
    if( h.length == 1 ){ h = '0' + h; }
    
    str = d + ' days, ' + h + ':' + m + ':' + s;
    return str;
}

function update_power_time()
{   
    date = new Date();
    registered_date = new Date(1000*registered())
    ge_set_innerHTML("register_time", registered_date.toLocaleString());
    ge_set_innerHTML("power_time",    to_time_string(power_available()));
    ge_set_innerHTML("spent_time",    to_time_string(power_spent()));
    ge_set_innerHTML("current_time",  date.toLocaleString());
}

function notition(element, className, innerHTML)
{
    element.innerHTML = innerHTML;
    element.className = className;
}


var old_spend_val = 0;
function update_spend_time()
{   
    update_power_time();

    if( spend_time.value == 0 && spend_time.value!='0' )  //TODO get something decent.
    { notition(amount_note, 'wrong', 'Not a number');
      spend_time.value = old_spend_val;
    }
    else if( spend_time.value < 0 )  // Reset stuff that is disallowed.
    { notition(amount_note, 'wrong', 'Negative disallowed');
      spend_time.value = old_spend_val;
    }
    else if( spend_time.value > power_available() )
    { notition(amount_note, 'wrong', 'Dont have that much');
      spend_time.value = old_spend_val;
    }
    else
    { pct = (100*spend_time.value/power_available()).toString().substr(0,4)
      notition(amount_note, 'note', '(' + pct + '%)');
      old_spend_val = spend_time.value;
    }
    if( increment_buttons_p )
    {   t = power_available()/1 - spend_time.value/1;
        for(var i = 0 ; i< increment_buttons.length ; i++)
        {  if( t < increment_buttons[i][1] ) // Not enough for adding this much.
           { ge_set_innerHTML(increment_buttons[i][0], null, 'note'); }
           else
           { ge_set_innerHTML(increment_buttons[i][0], null, ''); }
        }
    }
}

/*
// Will be called when transaction passes. (when entered into some block?)
function complete_spend(vote_for)
{
    return function()
    {
       amount_note.innerHTML = ''
       show_power_time();  // Update free time.
       participated[vote_for].passed = true;
       
       //TODO update the in progress entries.
    }
}*/

function pretend_transact(vote_for, amount)
{  //Lol @ javascript dumb.
    var_from_time = from_time()/1 + amount/1; // Goes negative..
}

function do_spend_time(vote_for, amount)
{   
    if(amount < power_available())  // Have enough.
    {//eth.transact(_sec, 0, vote_address, bin(vote_for), 1000, 1, complete_spend(vote_for));
        pretend_transact(vote_for, amount);
        participated[vote_for] = {'amount':amount, 'passed':false};
        update_progress();
    }
}

function update_spend_addr()
{
    update_power_time();
    if( spend_addr.value == '' )
    { notition(spend_addr_note, 'hint', 'Needs recipient'); }
    else if( participated[spend_addr.value] == null )
    { notition(spend_addr_note, 'note', '(ok)'); }
    else
    { notition(spend_addr_note, 'wrong', 'Already voted for'); }
}

function spend_time_button()
{
    if( spend_addr.value == '' ){ return; }  // Cant vote on empty.
    update_spend_time();
    update_spend_addr();

    // TODO check:
    // * validity of address? (though suppose Ethereum might implement it)
    // * against accidental repeat?
    // * against spending limit of topic?
    if( participated[spend_addr.value] == null )
    { do_spend_time(spend_addr.value, spend_time.value); }
    spend_addr.value = ''
    update_spend_addr()
}

function update_progress()
{
    progress_innerHTML = '';
    passed_innerHTML = '';
    for(var key in participated)
    {
        obj = participated[key];
        if( obj.passed )
        {    passed_innerHTML += '<tr><td>' + key + '</td><td>' + obj.amount + '</td></tr>'; }
        else
        {    progress_innerHTML += '<tr><td>' + key + '</td><td>' + obj.amount + '</td></tr>'; }
    }
    if( passed_innerHTML != '' )
    {   ge_set_innerHTML("passed",
                         '<h4>Votes arrived</h4><table>' + passed_innerHTML + '</table>');
    }
    if( progress_innerHTML != '' )
    {   ge_set_innerHTML("progress",
                         '<h4>Votes underway</h4><table>' + progress_innerHTML + '</table>');
    }
}

function voting(which)
{
    document.getElementById("voting_whole").hidden = which;
    document.getElementById("register_button").hidden = !which;
}


var pokingtons_patience = 1000;
function sir_pokington()
{   
    update_spend_time();
    update_spend_addr();
    setTimeout(function(){ sir_pokington(); }, pokingtons_patience);
}

function create_increment_buttons()
{
    element = document.getElementById("increment_buttons");
    if( element!=null )
    {   increment_buttons_p = true;
        string = "";
        for(var i = 0 ; i< increment_buttons.length ; i++)
        {  info = increment_buttons[i];
           string += '<button id="' + info[0];
           string += '" onclick="add_amount(' + info[1] + ')">'
           if(info.length == 2)
           {  string += info[0]; }
           else
           {  string += info[2]; }
           string += '</button>';
        }
        element.innerHTML = string;
    }
}

function register()
{   var_from_time = date.getTime()/1000;
    var_registered = var_from_time;
    voting(false);
    update_power_time();
    create_increment_buttons();
    
    sir_pokington();
}

voting(from_time() == 0);
spend_time.value= old_spend_val;

// Buttons!

//Add amounts.
function add_amount(amount)
{   spend_time.value = spend_time.value/1 + amount;
    update_spend_time();
}


var cur_fraction = 0;  //Fractions that rotate/
function rotating_button_to_fraction()
{   fractions = [10, 25, 50, 100];

    spend_time.value = Math.round(fractions[cur_fraction]*power_available()/100);
    cur_fraction += 1;
    if(cur_fraction > fractions.length - 1)
    {  cur_fraction = 0; }
    text = 'to ' + fractions[cur_fraction] + '%';
    if( text == 'to 100%' ){ text = 'ALL'; }
    ge_set_innerHTML("to_fraction", text);
    update_spend_time();
}
