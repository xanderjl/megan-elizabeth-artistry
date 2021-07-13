import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"

import theme from "@theme/index"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Home"
        titleTemplate="%s | Megan Elizabeth Artistry"
        description="A lovely description of this new site you've made."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.meganelizabethartistry.com/",
          site_name: "Megan Elizabeth Artistry",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
