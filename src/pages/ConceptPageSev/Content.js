import React from 'react';
import { Grid, Image, Container, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import concept1 from '/src/assets/images/IllustrationsConcept/pexels-pixabay-207247 (1).jpg';
import concept2 from 'src/assets/images/IllustrationsHomepage/pexels-tima-miroshnichenko-6508773.jpg';
import concept3 from '/src/assets/images/IllustrationsConcept/pexels-adonyi-gábor-1407857.jpg';
import concept4 from '/src/assets/images/IllustrationsConcept/pexels-norma-mortenson-4393655.jpg';
import './styles.scss';

const Content = () => (
  <div className="concept">
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable>
      <Grid.Column only='computer' width={6}>
        <Image src={concept1} className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src={concept1} className='concept-image--mobile' />
      </Grid.Column>
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2'>Misez sur le local</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2'>Misez sur le local</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
  </section>
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable  className="reversed">
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2' >Le choix des producteurs</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
 <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2' >Le choix des producteurs</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='computer' width={6}>
        <Image src={concept2} className='concept-image align-left' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src={concept2} className='concept-image--mobile' />
      </Grid.Column>
    </Grid>
  </section>
  <a className='button-link' href='/abonnement'><button>Je m'abonne à la box Graine de Food</button></a>
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable>
      <Grid.Column only='computer' width={6}>
        <Image src={concept3} className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src={concept3} className='concept-image--mobile' />
      </Grid.Column>
      <Grid.Column  only='computer' width={10}>
        <Container text>
          <Header as='h2'>Des produits de qualité</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
    <Grid.Column  only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2'>Des produits de qualité</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
    </section>
    <section className='concept-container'>
    <Grid verticalAlign='middle' stackable  className="reversed">
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2' >Des surprises livrées chaque début de mois</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2' >Des surprises livrées chaque début de mois</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='computer' width={6}>
        <Image src={concept4} className='concept-image align-left' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src={concept4} className='concept-image--mobile' />
      </Grid.Column>
    </Grid>
  </section>
  <Link className='button-link' to='/abonnement'><button>Je m'abonne à la box Graine de Food</button></Link>
  </div>
);

export default Content;
