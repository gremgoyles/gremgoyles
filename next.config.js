/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return[
      {
        source:'/gremgoyles.netlify.app/www.gremgoyles.com',
        destination: 'https:/www.gremgoyles.com',
        permanent: true,
      },

        /*
      {
        source:'/http://localhost:3000/twitter.com/gremgoyless',
        destination:'https:/twitter.com',
        permanent: true,

      },
      
      {
        source:'/gremgoyles.netlify.app/www.instagram.com/gremgoyles',
        destination:'https:/www.instagram.com/gremgoyles',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/discord.gg/WHrtReUkmG',
        destination:'https:/discord.gg/WHrtReUkmG',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/bit.ly/3Xfoveo',
        destination:'https:/www.bit.ly/3Xfoveo',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/www.youtube.com/channel/UCIMxTAWOi3CHCjmf72-mkWQ',
        destination:'https:/www.youtube.com/channel/UCIMxTAWOi3CHCjmf72-mkWQ',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/www.tiktok.com/@gremgoyles',
        destination:'https:/www.tiktok.com/@gremgoyles',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/www.twitch.tv/gremgoyles',
        destination:'https:/www.twitch.tv/gremgoyles',
        permanent: true,
      },
      {
        source:'/gremgoyles.netlify.app/gremgoylesmerch.bigcartel.com',
        destination:'https:/gremgoylesmerch.bigcartel.com',
        permanent: true,
      },
        /* from here is personal icons */
        /*

        {
          source:'/gremgoyles.netlify.app/twitter.com/VoiceOfBerto',
          destination:'https:/twitter.com/VoiceOfBerto',
          permanent: true,
        },
       
        {
          source:'/gremgoyles.netlify.app/twitter.com/Jaycode86',
          destination:'https:/twitter.com/Jaycode86',
          permanent: true,
        },
        {
          source:'/gremgoyles.netlify.app/twitter.com/IcarusNeedles',
          destination:'https:/twitter.com/IcarusNeedles',
          permanent: true,
        },
        */
    ]
  }
}

module.exports = nextConfig
