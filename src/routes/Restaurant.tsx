import { Container } from "@mui/material";
import Banner from '../components/Banner';


// https://course-react.javascript.ru/api/dishes?id=a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2
// https://course-react.javascript.ru/api/reviews?id=a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2
// https://course-react.javascript.ru/api/users

export default function Restaurant() {
    return (
      <>
      <Banner title={'hi'} text={'gu'} />
      <Container fixed>
        <h2>Restaurant</h2>
      </Container>
      </>
    );
  }

