import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram color={'#F47216'}/>,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook color={'#F47216'}/>,
  },
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter color={'#F47216'}/>,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { links, meta, socialLinks, copyright } = data.layout.footer

  return (
    <Box as="footer" paddingY={4} style={{backgroundColor: 'white'}}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id} color={'#F47216'}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        <Space size={5} />
        <Flex variant="start" responsive>
          {/*<FlexList variant="start" responsive>*/}
          {/*  {links &&*/}
          {/*    links.map((link) => (*/}
          {/*      <li key={link.id}>*/}
          {/*        <NavLink to={link.href}>{link.text}</NavLink>*/}
          {/*      </li>*/}
          {/*    ))}*/}
          {/*</FlexList>*/}
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id} style={{color:'#F47216'}}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small" style={{color:'#F47216'}}>{copyright}</Text>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
