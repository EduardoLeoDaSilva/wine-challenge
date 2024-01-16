import Image from "next/image";
import { Header, HorizontalList } from "./styles/components/header/header";
import { getCssText } from "./styles";
import { gobalStyle as globalStyle } from "./styles/global"
import logo from '../../public/logo.svg'
import account from '../../public/conta.svg'
import search from '../../public/Busca.svg'
import cart from '../../public/vazio.svg'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  globalStyle();

  return (
    <html lang="en">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>

        <Header>
          <Image src={logo} alt="Brand logo" />
          <HorizontalList>
            <li>Clube</li>
            <li>Loja</li>
            <li>Produtores</li>
            <li>Ofertas</li>
            <li>Eventos</li>
          </HorizontalList>
          <HorizontalList>
            <li><Image src={search} alt="Brand logo" /></li>
            <li><Image src={account} alt="Brand logo" /></li>
            <li><Image src={cart} alt="Brand logo" /></li>
          </HorizontalList>
        </Header>
        {children}

      </body>
    </html>
  )
}
