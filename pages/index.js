import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const usuarioGithub = 'johnnunes';
  const pessoasFavoritas = ['felipefialho', 'omariosouto','EduardoPires','andrebaltieri']

  return (
    <> 

    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
       <ProfileSideBar githubUser={usuarioGithub}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box >
          <h1 classNamee="title">
            Bem-Vindo(a)
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>

           <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return(
                  <li>
                    <a href={`/users/${itemAtual}`}>
                     <img src={`https://github.com/${itemAtual}.png`}/>
                     <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        <Box >
          Comunidades
        </Box>
      </div>
    </MainGrid>

    </>
  )
}
