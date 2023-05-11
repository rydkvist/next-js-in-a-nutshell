import Heading from '@/components/Heading';
import Text from '@/components/Text';
import StyledLink from '@/components/links/StyledLink';

const Landing = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Heading>De olika form av <span className="font-bold text-yellow-200">renderingar</span><br />och hur de utförs med <span className="font-bold text-slate-300">Next.js</span></Heading>

        <div className='flex flex-col items-center'>
          <StyledLink href="/render/csr">
            CSR
          </StyledLink>
          <StyledLink href="/render/ssr">
            SSR
          </StyledLink>
          <StyledLink href="/render/ssg">
            SSG
          </StyledLink>
          <StyledLink href="/render/isr">
            ISR
          </StyledLink>
          <StyledLink href="/render/isr20">
            ISR-20
          </StyledLink>
        </div>
      </div>

      <div style={{ height: "80vh" }}>
        <Heading>Andra coola <span className="font-extrabold">Next.js</span> features</Heading>
        <div className='flex flex-col items-center'>
          <StyledLink href="/blog">
            Blogg med SSG
          </StyledLink>
          <StyledLink href="/image">
            Bild optimering
          </StyledLink>
        </div>
      </div>
    </div>
  )
}

export default Landing;