const request = require('request');
const { MessageEmbed } = require('discord.js');
const options = { json: true };
let getHero = (rand) => new Promise((res) => {
  const urlSuper = 'https://superheroapi.com/api/103623524740324/' + rand;
  request(urlSuper, options, (err, response, body) =>{
    if(!err && response.statusCode === 200){
      let embed = new MessageEmbed()
        .setTitle(body.name)
        .setColor(0x3498db)
        .setDescription(
          `
            **Nombre**: ${body.biography['full-name']}
            **Género**: ${body.appearance.gender}
            **Raza**: ${body.appearance.race}
            **De**: ${body.biography.publisher}
            `
        )
        .setImage(
          body.image.url
        );
      res(embed);
    }
  });
});

module.exports = { getHero };