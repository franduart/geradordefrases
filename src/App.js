import { useState } from "react";
import logo from './assets/ChatGPT_Image_7_de_set._de_2025__21_06_30-removebg-preview.png'
function App() {
  const [frase, setFrase] = useState(0)
  const [categoriaAtiva, setCategoriaAtiva] = useState(null)

  const dados = [
    {
      id:'0',
      categoria: 'Mensagens bom dia!',
      mensagens: [
  "Bom dia! 🌞 Que seu dia seja leve e cheio de boas energias.",
  "Acorde com gratidão e o dia será incrível. Bom dia! ✨",
  "Bom dia! Hoje é uma nova chance para realizar seus sonhos.",
  "Que sua manhã seja iluminada e seu coração cheio de paz. 💛",
  "Bom dia! Que nunca falte fé, coragem e alegria na sua vida.",
  "A vida é feita de novos começos. Bom dia para mais um deles! 🌸",
  "Bom dia! Que o sorriso seja seu companheiro hoje e sempre.",
  "Cada manhã traz uma nova oportunidade. Aproveite! 🌅",
  "Bom dia! Que você encontre motivos para agradecer o dia inteiro.",
  "Levante-se com determinação e vá atrás das suas metas. 💪",
  "Que seu café esteja forte e seu dia seja doce. ☕🍩",
  "Bom dia! Que a felicidade se multiplique a cada instante.",
  "Mais um dia, mais uma chance de ser feliz. Aproveite! 🌻",
  "Bom dia! A vida sorri para quem acredita nela.",
  "Desejo um dia produtivo, cheio de paz e conquistas!"
      ]
    },

    {
      id:'1',
      categoria: 'Mensagens de boa noite!',
      mensagens: [
   "Boa noite! 🌙 Que seu descanso seja tranquilo e revigorante.",
  "Durma com sonhos lindos e acorde com novas esperanças. ✨",
  "Boa noite! Que a paz invada seu coração e traga serenidade.",
  "Hora de desligar da correria e recarregar as energias. 😴",
  "Que a lua ilumine seus sonhos e traga inspiração. 🌌",
  "Boa noite! Amanhã é um novo dia cheio de possibilidades.",
  "Que seu sono seja profundo e cheio de bons sonhos. 💫",
  "Boa noite! Que a gratidão embale seu coração antes de dormir.",
  "A noite chegou para renovar suas forças. Descanse bem! 🌙",
  "Boa noite! Que cada estrela represente uma bênção em sua vida.",
  "Silencie a mente, descanse o corpo e acalme o coração. 💜",
  "Boa noite! Que o amanhã traga sorrisos e conquistas.",
  "Que a paz da noite embale seu sono e lhe traga serenidade. 🌃",
  "Boa noite! Recarregue suas energias para um novo amanhecer.",
  "Que os anjos guardem seu sono e protejam sua noite. 😇"
      ]

    }
  ]

   function gerarMensagem() {
    if (!categoriaAtiva) {
      setFrase("Escolha uma categoria primeiro!");
      return;
    }


    const mensagens = categoriaAtiva.mensagens;
    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    setFrase(aleatoria);
  }


  return (
    <div className='devfrases'>
    <img src={logo} alt="logo gerador de frases" style={{maxWidth:'300px'}}></img>
     
    <div className="buttons">
        {dados.map((item) => (
          <button
            key={item.id}
            className="button"
            onClick={() => setCategoriaAtiva(item)}
            
            style={{
              border:
                categoriaAtiva?.id === item.id
                  ? "2px solid #c1121f"
                  : "1px solid gray",
            }}
          >
            {item.categoria}
          </button>
        ))
        }

      </div>

    <button className="buttonGerar" onClick={gerarMensagem}>Gerar mensagem</button>
    
    <div className="campotext">
      {frase !== 0 && <p>{frase}</p>}
    </div>



    </div>
  );
}

export default App;
