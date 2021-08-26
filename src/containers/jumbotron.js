import { Jumbotron } from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json';

export const JumbotronContainer = () => {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.subTitle} />
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
};
