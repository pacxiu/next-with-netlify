import Layout from 'components/Layout';
import { attributes, html } from 'content/home.md';
import { Box, Button, Heading } from 'theme-ui';

const Home = () => (
  <Layout>
    <Box sx={{ textAlign: 'center' }}>
      <Heading>{attributes.title}</Heading>
      <Box dangerouslySetInnerHTML={{ __html: html }} />
      Box<Button>Test</Button>
    </Box>
  </Layout>
);

export default Home;
