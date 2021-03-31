class List {
  constructor() {
    this.words = ["garden","trucker","flesh","gloves","internet","flap","flop","amputee","struggle","doctor","cup","tree","cream","graphic","fun-eral","nipples","jewish","farm","exploration","egg","pop","depression","uncle","splatterings","fruit","JUSTICE","noodle","fetus","puffy","slave","picnic","belt","monkey","bag","lubricated","pedophelia","fun","sac","castle","splendiferous","confusion","slippery","flupe","pool","check","nibble","soggy","suprise","stuffed","mystic","sniff","party","sergeant","bludgeoned","child","palace","cup","yourself","scalp","cackle","cancer","cart","flavor","nozzle","sexual slavery","dark","tent","sneeze","elf","shriveled","my","fetish","vascectomy","hole","pop","cave","chunk","park","canadian","warm","clamping","grandma","table","wheel of","rip","dad's","library","pubic","shrunken","cucumber","swamp","space","soup","stroke","aids","wipe","plush","failure","hospital","delight","lobe","gun","enchanted","aroma","boy","deep", "deep dark", "lady","cob","incident","supportive","trailer","scalpel","trailer","rut","sherriff","homo-cide","kayak","cannon","punishment","buck-naked","bangin'","broccoli","grunts","berry","garden","dusty","marble","whales","salt","leash","diet","corpse","waffle","sugar","barn","mission","quack","hole","hospital","popsicle","spooky","freshly-cut","sad","lad","cake","power","terminal","mac-n-cheese","slap","smack","seed","tasty","krunky","high on","sock","gushing","plush","saucy","vegetable","super","bag","crackle","intimate","turkey","cob","bean","irish","alien","freedom","drippings","hairspray","lungs","slippery","clam","sonic","salad","guzzle","nutritious","thump","bandana","meat","nut","mystery","protein","incredible","sound of","management","wet","trashy","amputee","panic","fiasco","crisp","chewy","empty","shaft","ass","diabetic","fever","agenda","melon","belt","gargle","log","slaughter","children","puppet","snap","gaping","turtle","fetish","grease","golf","burial","poopy","slick",'emergenty','vape',"cucumber","vacant","elven","banana","donkey","flakes","cape","great-white","crust","asian","cashew","pirate","honky tonk","shwarma","senpai","skeleton","milk-able","lawn","hammer","cumbersome"];

  }
}

function makeWord(){
  let test = new List();
  let randomNumber = Math.floor(Math.random() * ((test.words).length + 1));
  let word = (test.words[randomNumber])
  return word;
}


$(document).ready(function(){
  $('#button').click(function(){
    let wordOne = makeWord();
    let wordTwo = makeWord();
      if (wordOne === wordTwo) {
        wordTwo();
      };
    $('.words').text(wordOne + " " + wordTwo);
    $('.or').text("Or, try");
    $('.wordsFlipped').text(wordTwo + " " + wordOne);
    console.log(wordOne,wordTwo)
  });
});