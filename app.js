const glyphs = ['->','::','=>','www','!!','!=','__','<=','>=','===','.=','||','<-','..','|>','&&','<<','>>','<>','#{','--',':=','...','-->','.-','~@','#_(',';;','#(','??','..<','=='];


/* for (let i = 0; i < 9; i++) {
    const languages = document.getElementsByClassName('language');
} */

/* const test = document.getElementsByClassName('language')[0].textContent;
console.log(test.replace(/\s/g, '')); */

/* glyphs.forEach(function(x) {
    for (let i = 0; i < 9; i++) {
        const languages = document.getElementsByClassName('language')[i].textContent;
        languages.replace(/\s/g, '');
        for (let a = 0; a < languages.length; a++) {
            if (x ==)
        }
    }    
}); */


let search = ( str, what ) => {
	return '"' + what + '" was found ' + str.match( new RegExp( what, 'g' )).length + ' times';
}

/* let search = ( str, arr ) => {
    arr.forEach(function(glyph) {
        console.log('"' + glyph + '" was found ' + str.match( new RegExp( glyph, 'g' )) + ' times');
    })
} */

search("classCar<ActiveRecord::Basehas_many:wheels,:class_name=>'Wheel',:foreign_key=>'car_id'scope:available,->{where(available:true)}endomega=->{'www'}alpha=->(arg){arg*2}hash={1=>'one',2=>'two'}","->");


const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    header.style.boxShadow = '0px 6px 8px -5px rgba(25,36,77,0.5)';
    header.style.backgroundColor = 'rgba(38,41,87,0.95)';
})