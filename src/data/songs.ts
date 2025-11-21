export interface Song {
  title: string;
  description: string;
  image: string;
  audio: string;
}

export const songs: Song[] = [
  {
    title: "Rather Be — GIVEON",
    description: "Me lembra de como eu prefiro estar com você do que em qualquer outro lugar",
    image: "/src/assets/images/ratherbe.png",
    audio: "/src/assets/songs/ratherbe.mp3"
  },
  {
    title: "I'd Have You Anytime — George Harrison",
    description: "Tudo que eu tenho é seu, tudo que você vê em mim é seu",
    image: "/src/assets/images/harrison.jpg",
    audio: "/src/assets/songs/idhaveyouanytime.mp3"
  },
  {
    title: "Here, There and Everywhere — The Beatles",
    description: "Eu vou estar aqui, lá, e em todo lugar por você",
    image: "/src/assets/images/revolver.jpg",
    audio: "/src/assets/songs/herethereeverywhere.mp3"
  },
  {
    title: "Explodir - Anavitória",
    description: "Eu te escolheria um milhão de dias",
    image: "/src/assets/images/cor.jpg",
    audio: "/src/assets/songs/explodir.mp3"
  },
  {
    title: "If You Don't Know Me By Now — Simply Red",
    description: "Você me faz entender a diferença entre o certo e errado",
    image: "/src/assets/images/ifu.jpg",
    audio: "/src/assets/songs/ifudontknowmebynow.mp3"
  },
  {
    title: "Romance — Fontaines D.C.",
    description: "O romance é um lugar pra nós dois",
    image: "/src/assets/images/romance.jpg",
    audio: "/src/assets/songs/romance.mp3"
  },
  {
    title: "God Only Knows — The Beach Boys",
    description: "Só deus sabe o que eu seria sem você",
    image: "/src/assets/images/godonlyknows.jpg",
    audio: "/src/assets/songs/godonlyknows.mp3"
  },
  {
    title: "Somethin’ Stupid — Frank Sinatra",
    description: "Lembro do dia que falei que te amo pela primeira vez",
    image: "/src/assets/images/sinatra.jpg",
    audio: "/src/assets/songs/somethinstupid.mp3"
  },
  {
    title: "Distant Lover — Marvin Gaye",
    description: "Afe que saudade de você",
    image: "/src/assets/images/marvingaye.jpg",
    audio: "/src/assets/songs/distantlover.mp3"
  },
  {
    title: "First Love / Late Spring — Mitski",
    description: "Essa não é tão feliz mas diz o que eu sentiria se você me largasse, então não me larga pls!",
    image: "/src/assets/images/mitski.png",
    audio: "/src/assets/songs/firstlove.mp3"
  },
  {
    title: "Northern Sky — Nick Drake",
    description: "Você me amaria por quem eu sou?",
    image: "/src/assets/images/northernsky.jpg",
    audio: "/src/assets/songs/northernsky.mp3"
  },
  {
    title: "Who Knows — Daniel Caesar",
    description: "Talvez a gente se case algum dia, quem sabe",
    image: "/src/assets/images/whoknows.png",
    audio: "/src/assets/songs/whoknows.mp3"
  }
];
