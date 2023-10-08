var MODEL = (function(){
    var _homeContent = `<title>Home</title><h1>HOME</h1>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
  asperiores rerum, inventore nobis doloribus reprehenderit vitae
  consequuntur ea a doloremque id vero maxime incidunt odio delectus
  perferendis voluptatibus esse iusto.
</p>
<p>
  Similique quod beatae sed sit ipsa iusto, consequuntur suscipit nam et,
  magni repellat! Fuga necessitatibus cum soluta in sequi esse fugiat
  quaerat placeat ducimus autem. Neque saepe eum veniam maiores.
</p>
<p>
  Reprehenderit nihil placeat ex dolor dolorem quibusdam optio doloribus.
  Dolorum, ad consequatur, iusto modi perferendis quae dolores culpa
  accusantium assumenda asperiores officiis quo omnis dignissimos tempore
  laboriosam, ea ex. Sed?
</p>
<p>
  Officiis corporis molestias quos doloribus, cum mollitia expedita ipsa?
  Quam minus doloremque dolores voluptatum pariatur similique, placeat
  asperiores odit cumque quos! Corporis modi, tempora nemo saepe itaque
  veniam eveniet aperiam!
</p>
<p>
  Blanditiis necessitatibus libero ut cumque numquam? Qui ut, amet dolore
  sapiente recusandae saepe a possimus, voluptatibus porro vitae tempora
  odit iste atque impedit repellendus aut. Consequatur officia iusto fugit
  sequi.
</p>`;
var _aboutContent = `<title>About</title><h1>ABOUT</h1>
<h4>This is about me!</h4>
<img src="images/Mychal_Wood.jpg" class="portrait" />
<p>
  Hello there, my name is Mychal Wood! I am currently a Senior at IUPUI
  pursuing the Full Stack program, where I'll be getting two Bachelor's
  degrees when I graduate: Informatics and Media Arts and Science with a
  specialization in Web Design and Development. I grew up and have lived
  in Beech Grove my entire life, so I am very familiar with the
  surrounding area. Scroll down to see some of my likes and interests!
</p>
<p>
  In my free time, I love to hang out with friends and family, watch TV,
  play videogames, build Legos, go camping, and much more! Some of my
  favorite video games are The Legend of Zelda, Mario Kart, Super Smash
  Bros Ultimate, Terraria, Fortnite, Minecraft, and the list goes on and
  on!
</p>
<img src="images/SmashBros.jpg" class="game_picture" />
<img src="images/Zelda.jpg" class="game_picture" />
<p>
  Also in my free time, I like to mess with various electronic things.
  From my 3D printer, to even my Raspberry Pi, there is a wide variety of
  things I like to mess with. I even plan on building a PC in the coming
  months to put the skills I've learned to the test, and to build one to
  game on! Also in high school, I was part of a Vex Robotics team, where I
  helped keep track of the engineering notebook and anything else that was
  needed at the time.
</p>`;
var _productsContent = `<title>Products</title><h1>PRODUCTS</h1>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur debitis harum impedit ducimus possimus ipsum, ad veniam deleniti numquam incidunt vitae minus voluptatibus nisi. Odio minima molestiae voluptates voluptas architecto.
</p>
<p>
  Error, magnam tempore. Sapiente, unde laboriosam adipisci quasi soluta officia natus ut atque sed inventore quo dolore repudiandae asperiores. Quaerat, accusantium laborum quibusdam labore commodi et iusto earum. Sapiente, sunt!
</p>
<p>
  Minima architecto maiores sequi voluptatibus, error veritatis quibusdam quae alias culpa nemo expedita provident. Hic nulla alias non reprehenderit enim aliquam maiores? Placeat, dicta praesentium reiciendis autem aperiam quaerat at!
</p>
<p>
  Dolor iure libero, reprehenderit provident cumque distinctio eos reiciendis fugit totam, illum, tenetur repellat inventore. Illo nisi suscipit voluptates repellat, omnis tempora. Tempora optio reprehenderit dolor eveniet ratione maiores voluptatum?
</p>
<p>
  Nulla, voluptatum similique sint, iste eveniet minima provident facere soluta inventore velit beatae vel quasi. Maiores, optio unde. Fugit vitae aspernatur at explicabo quod corrupti odit, ad a ullam beatae?
</p>`;
var _contactContent = `<title>Contact</title><h1>CONTACT</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum in
  iure fugiat, possimus eveniet voluptas quo quisquam, minima asperiores
  repellendus rerum fugit. Veniam, omnis deserunt nisi saepe a dolor
  minus.
</p>
<p>
  Architecto obcaecati ad nesciunt doloribus nulla laudantium a libero
  fugiat vel voluptatum dicta pariatur adipisci quibusdam ipsum, et
  deserunt, dolorem sunt repudiandae est iste ab cupiditate magnam. Alias,
  ab inventore.
</p>
<p>
  Suscipit itaque blanditiis commodi velit amet tempora totam consectetur
  dolor eveniet repellat. Accusamus perspiciatis nisi doloribus impedit
  aliquam! Deleniti odio sequi quibusdam libero possimus, vitae
  reiciendis! Quasi recusandae animi optio.
</p>
<p>
  Hic, iure porro? Mollitia corrupti quis repudiandae amet eum voluptates
  illum natus quibusdam sit sequi, facere inventore minima blanditiis in
  facilis iste consectetur quas rem quod architecto est nemo qui.
</p>
<p>
  Totam dolore quaerat unde assumenda, quam consequuntur quibusdam, nisi
  adipisci nostrum odit recusandae delectus? Temporibus non aspernatur
  fugiat vitae, praesentium error exercitationem. Modi necessitatibus
  laudantium consequuntur at alias omnis praesentium.
</p>
<p>
  Velit itaque repellat excepturi? Sint ipsam enim quo expedita
  repudiandae doloremque perspiciatis officiis perferendis, est similique
  maxime neque, voluptas error. Ipsum labore ipsa incidunt enim excepturi
  laborum tempore nesciunt id.
</p>`;

var _updateView = function(pageName){
    console.log("Model " + pageName);
    pageContent = "_" + pageName;
    $("#app").html(eval(pageContent));
};
    return {
        updateView: _updateView,
    };
})();
