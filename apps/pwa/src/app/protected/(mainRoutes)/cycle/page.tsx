import CyclePage from '@components/pages/mainRoutes/cycle/CyclePage';

const Cycle = async () => {
  const req = await fetch('http://localhost:3000/api/user', {
    cache: 'no-store',
    method: 'GET',
    credentials: 'include',
  });

  if (!req.ok) {
    throw new Error('Failed to fetch hello');
  }

  const res = await req.json();
  // console.log(req.json());

  // const res2 = await fetch('http://localhost:3000/api/hello', { cache: 'no-store' });

  // console.log(res2.json());
  return <CyclePage res={res} />;
};

export default Cycle;
