//Note; just mucked up for now.

var date = new Date();

var avail_time  = document.getElementById("avail_time");
var reg_time    = document.getElementById("reg_time");
var cur_time    = document.getElementById("cur_time");
var spend_time  = document.getElementById("spend_time");
var button      = document.getElementById("button");
var spend_addr  = document.getElementById("spend_addr");
var power_time  = document.getElementById("power_time");
var progress    = document.getElementById("progress");
var passed      = document.getElementById("passed");
var to_fraction = document.getElementById("to_fraction");


var amount_note     = document.getElementById("amount_note");
var spend_addr_note = document.getElementById("spend_addr_note");


var vote_address = "TODO";

//secretToAddress(_a):
var own_address = "TODO"; 

// NOTE: really inconvenient without good state-of-blockchain tracking.
var participated = {};

var var_from_time = 0; //eth.getStorageAt(vote_address, own_address);
function from_time()
{   return var_from_time; }

// NOTE: start arkbg1 testing section

function avail_time()
{
return date.getTime() - from_time();
}


function reg_time()
{
    var d = new Date;
register_button.onclick=function(d)
}

function cur_time()
{
return date.getTime()
}

// NOTE: end arkbg1 testing section

function power_available()  // Amount of time available to spend.
{   return date.getTime() - from_time(); }

function update_power_time()
{   
    date = new Date();
    power_time.innerHTML = power_available();
}

function notition(element, className, innerHTML)
{
    element.innerHTML = innerHTML;
    element.className = className;
}

var fractions = [10, 25, 50, 100];
var cur_fraction = 0;
function button_to_fraction()
{
    spend_time.value = Math.round(fractions[cur_fraction]*power_available()/100);
    cur_fraction += 1;
    if(cur_fraction > fractions.length - 1)
    {  cur_fraction = 0; }
    text = 'to ' + fractions[cur_fraction] + '%';
    if( text == 'to 100%' ){ text = 'ALL'; }
    to_fraction.innerHTML = text;
    update_spend_time();
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
{
//    alert(amount);
//    var_from_time = var_from_time + amount;
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
    { do_spend_time(spend_addr.value, spend_time.value);  }
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
    {   passed.innerHTML = '<h4>Transactions arrived</h4><table>' + passed_innerHTML + '</table>'; }
    if( progress_innerHTML != '' )
    {   progress.innerHTML = '<h4>Transactions in progress</h4><table>' + progress_innerHTML + '</table>'; }
}

function voting(which)
{
    document.getElementById("voting_whole").hidden = which;
    document.getElementById("register_button").hidden = !which;
}

function register()
{   var_from_time = date.getTime();
    voting(false);
    update_power_time();
}

voting(from_time() == 0);
spend_time.value= old_spend_val;
update_power_time();
update_spend_addr();
