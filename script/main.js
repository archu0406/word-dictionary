document.addEventListener("DOMContentLoaded", function (){
    console.log(`It's working`);

    const findDefn = document.getElementById("finddefn");
    const findSynm = document.getElementById("findsynm");
    const getResult1 = document.getElementById("result1");
    const getResult2 = document.getElementById("result2");

    findDefn.addEventListener("click", function(){
        getDefinition();
    });

    findSynm.addEventListener("click", function(){
        getSynonym();
    });

    
    function getDefinition(){
        var x= document.getElementById("text").value;
        fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry="+x, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "10f041a469mshe89476b98840655p1fb177jsnf7f1ad0f7e6b"
	}
})
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        console.log("found definition",res);
        createDefn(res);
    })
    .catch((err) => {
        console.log(err);
    });
    }

    function getSynonym(){
        var x= document.getElementById("text").value;
        fetch("https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry="+x, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "10f041a469mshe89476b98840655p1fb177jsnf7f1ad0f7e6b"
	}
})
    .then((response) => {
        return response.json();
    })
    .then((syn) => {
        console.log("found synonym",syn);
        createsynm(syn);
    })
    .catch((err) => {
        console.log(err);
    });
    }

    function createDefn(defn){
        getResult1.innerText = `${defn.meaning.noun},${defn.meaning.adjective}`;
        getResult2.innerText = `${defn.meaning.verb},${defn.meaning.adverb}`;
    }

    function createsynm(assoc){
        getResult1.innerText = `${assoc.assoc_word}`;
        getResult2.innerText = `${assoc.assoc_word_ex}`;
    }

});