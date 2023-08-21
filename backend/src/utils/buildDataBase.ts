import { PrismaClient } from '@prisma/client';
import fillDb from './fetchData';
import players from './players';

const test = async () => {
  const prisma = new PrismaClient();
  const getData1 = new fillDb();
  getData1.getPuuidAndAccountId(players);
  const puuids = await prisma.proData.findMany();
  for (const puuid of puuids) {
    getData1.getMatchId({ puuid: puuid.puuid, region: puuid.region });
    getData1.getMatchData(puuid.region);
  }
};

test();
