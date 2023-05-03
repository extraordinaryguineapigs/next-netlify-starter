import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
$('.filterOptions').change(function(){

    var theChosenLang = $('#langOption').find(':selected').attr('data-lang-option');

    var theChosenCat = $('#categoryOption').find(':selected').attr('data-category-option');


    $('.displayBox').css('display','none');
    var selector = '.displayBox';
    
    if(theChosenLang != "all"){
        selector += '[data-lang-option="'+ theChosenLang +'"]';
    } 
    if(theChosenCat != "all"){
        selector += '[data-category-option="'+ theChosenCat +'"]';
    }
    
    $(selector).fadeIn();

}); 

export default function Home() {
  return (
<select id="langOption" class="filterOptions">
    <option data-lang-option="all" value="all">All</option>
    <option data-lang-option="english" value="en">English</option>
    <option data-lang-option="spanish" value="sp">Spanish</option>
</select>

<select id="categoryOption" class="filterOptions">
    <option data-category-option="all" value="all">All</option>
    <option data-category-option="humour" value="hu">Humour</option>
    <option data-category-option="romance" value="ro">Romance</option>
</select>

<div class="displayBox" data-lang-option="english" data-category-option="humour">
    First Box English
</div>

<div class="displayBox" data-lang-option="spanish" data-category-option="humour">
    First Box Spanish
</div>

<div class="displayBox" data-lang-option="english" data-category-option="humour">
    Second Box English
</div>

<div class="displayBox" data-lang-option="spanish" data-category-option="romance">
    Second Box Spanish
</div>
  )
}
