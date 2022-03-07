import Section from 'components/Section'
import React from 'react'

const Home = () => {
  const items = [
    {
      id: 1,
      title: "Contra Mix",
      description: "Tepki, Khontkar, Aspova ve daha fazlası",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/artist/3tJELJoPZ4VTKmL0vppqLj/tr/default",
      type: "album"
    },
    {
      id: 2,
      title: "Hip Hop Mix",
      description: "Tepki, Ben Fero, Ezhel ve daha fazlası",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/5DtQ3MpxpzAyDvgMNFWN1r/en/default",
      type: "album"
    },
    {
      id: 3,
      title: "Bırakman Doğru Mu",
      description: "Anıl Piyancı, Zeynep Bastık",
      image: "https://i.scdn.co/image/ab67616d00001e0254a0ca8e9606dddf34b324bf",
      type: "album"
    },
    {
      id: 4,
      title: "KAFA10",
      description: "Anıl Piyancı, Ezhel",
      image: "https://i.scdn.co/image/ab67616d00001e026f30d163fb56d815ac151865",
      type: "album"
    },
    {
      id: 5,
      title: "Göklerde Süzülürken",
      description: "Anıl Piyancı, Kaan Boşnak",
      image: "https://i.scdn.co/image/ab67616d00001e02b9ed9ddbda77a0d549c5eba1",
      type: "album"
    },
    {
      id: 6,
      title: "2000s Mix",
      description: "Şebnem Ferah ve daha fazlası",
      image: "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/74xBVPWYoSf5pvo5IkePRO/en/default",
      type: "album"
    },
    {
      id: 7,
      title: "TEDx İstanbul",
      description: "Ulucaroglu",
      image: "https://i.scdn.co/image/685dab841359297d81504e943895c413228decc9",
      type: "podcast"
    },
    {
      id: 8,
      title: "Bergen",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab67616d0000b273f3ced05792546f8eae493fb5",
      type: "artist"
    }
  ];
  
  return (
    <div className="grid gap-y-8">
      <Section
        title="Sana özel bölümler"
        more="/see-more"
        items={items} 
      />
      <Section
        title="Yakınlarda çalınanlar"
        more="/see-more"
        items={items} 
      />
      <Section
        title="En çok dinlediğin mix'ler"
        more="/see-more"
        items={items} 
      />
      <Section
        title="Bugün için tavsiye"
        more="/see-more"
        items={items} 
      />
    </div>
  )
}

export default Home