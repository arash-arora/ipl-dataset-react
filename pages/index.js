export default function Home() {
  return (
    <div className='mt-32 flex flex-wrap justify-center gap-16 items-center'>
      <h1 className='text-2xl font-semibold max-w-lg flex-1 text-justify'>
        This portal gives you an insight of IPL matches played by participating
        teams. It provides you the dashboard with various analytical features of
        teams, players, match results, man of the match, marginal runs & wickets
      </h1>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Indian_Premier_League_Official_Logo.svg/1200px-Indian_Premier_League_Official_Logo.svg.png'
        alt=''
        className='w-[400px] h-[200px]'
      />
    </div>
  );
}
