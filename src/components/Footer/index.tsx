import Dc from 'assets/images/Icon_DC.png'
import Fb from 'assets/images/Icon_FB.png'
import Rd from 'assets/images/Icon_RD.png'
import Tw from 'assets/images/Icon_TW.png'
import { Box, Flex } from 'rebass'
import styled from 'styled-components/macro'

const Link = styled.a`
  height: 38px;
  width: 38px;
  margin: 0 8px;
`

const FooterStyled = styled(Box)`
  z-index: 1;
`

export default function Footer() {
  return (
    <FooterStyled width="100%" height="158px" backgroundColor="#1E4050">
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Link>
          <img src={Fb} alt="fb" />
        </Link>
        <Link>
          <img src={Rd} alt="fb" />
        </Link>
        <Link href="https://twitter.com/DDoge_Coin" target="_blank">
          <img src={Tw} alt="fb" />
        </Link>
        <Link>
          <img src={Dc} alt="fb" />
        </Link>
      </Flex>
    </FooterStyled>
  )
}
