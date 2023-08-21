import { PrismaClient } from '@prisma/client';
import { ProPlayer } from 'src/Interfaces/ProPlayer';
import { Info } from 'src/Interfaces/InfoData';

const API_TOKEN = 'RGAPI-3a78ad86-ea12-4462-b69f-527a0b12dca7';

class fillDb {
  private readonly prismaService = new PrismaClient();

  async getPuuidAndAccountId(arr: ProPlayer[]) {
    for (let i = 0; i < arr.length; i++) {
      const url = `https://${arr[i].server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${arr[i].nickName}?api_key=${API_TOKEN}`;
      const data = await (await fetch(url)).json();
      const existPuuid = await this.prismaService.proData.findFirst({
        where: {
          puuid: data.puuid,
        },
      });
      if (!existPuuid) {
        await this.prismaService.proData.create({
          data: {
            puuid: data.puuid,
            accountId: data.accountId,
            nick: arr[i].nickName,
            region: arr[i].region,
            server: arr[i].server,
          },
        });
      }
    }
    this.prismaService.$disconnect();
  }

  async getMatchId({ puuid, region }: { puuid: string; region: string }) {
    const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=100&api_key=${API_TOKEN}`;
    const data: Array<string> = await (await fetch(url)).json();
    const player = await this.prismaService.proData.findFirst({
      where: {
        puuid: puuid,
      },
    });
    for (const match of data) {
      const existMatch = await this.prismaService.proIdMatches.findFirst({
        where: {
          matchId: match,
          proPlayerId: player.id,
        },
      });
      if (!existMatch) {
        await this.prismaService.proIdMatches.create({
          data: {
            matchId: match,
            proPlayerId: player.id,
            region: player.region,
            server: region,
            nick: player.nick,
          },
        });
      } else {
        break;
      }
    }
    this.prismaService.$disconnect();
  }

  async getMatchData(region: string) {
    const matches = (
      await this.prismaService.proIdMatches.findMany()
    ).reverse();
    for (const match of matches) {
      const existMatch = await this.prismaService.proMatches.findFirst({
        where: {
          matchId: match.matchId,
        },
      });
      if (!existMatch) {
        const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/${match.matchId}?api_key=${API_TOKEN}`;
        const { info }: { info: Info } = await (await fetch(url)).json();
        if (info.gameMode !== 'CLASSIC') continue;
        await this.prismaService.proMatches.create({
          data: {
            proId: match.proPlayerId,
            lane:
              info.participants.find(
                (participant) => participant.summonerName === match.nick,
              ).teamPosition === ''
                ? info.participants.find(
                    (participant) => participant.summonerName === match.nick,
                  ).individualPosition
                : info.participants.find(
                    (participant) => participant.summonerName === match.nick,
                  ).teamPosition,
            champion: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).championName,
            matchId: match.matchId,
            teamId: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).teamId,
            win: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).win,
            proPlayerId: match.proPlayerId,
            allyOne: info.participants
              .filter(
                (participant) =>
                  participant.teamId ===
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'TOP' || e.individualPosition == 'TOP',
              ).championName,
            allyTwo: info.participants
              .filter(
                (participant) =>
                  participant.teamId ===
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'JUNGLE' ||
                  e.individualPosition == 'JUNGLE',
              ).championName,
            allyThree: info.participants
              .filter(
                (participant) =>
                  participant.teamId ===
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'MIDDLE' ||
                  e.individualPosition == 'MIDDLE',
              ).championName,
            allyFour: info.participants
              .filter(
                (participant) =>
                  participant.teamId ===
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'BOTTOM' ||
                  e.individualPosition == 'BOTTOM',
              ).championName,
            allyFive: info.participants
              .filter(
                (participant) =>
                  participant.teamId ===
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'UTILITY' ||
                  e.individualPosition == 'UTILITY',
              ).championName,
            enemyOne: info.participants
              .filter(
                (participant) =>
                  participant.teamId !==
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'TOP' || e.individualPosition === 'TOP',
              ).championName,
            enemyTwo: info.participants
              .filter(
                (participant) =>
                  participant.teamId !==
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'JUNGLE' ||
                  e.individualPosition === 'JUNGLE',
              ).championName,
            enemyThree: info.participants
              .filter(
                (participant) =>
                  participant.teamId !==
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'MIDDLE' ||
                  e.individualPosition === 'MIDDLE',
              ).championName,
            enemyFour: info.participants
              .filter(
                (participant) =>
                  participant.teamId !==
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'BOTTOM' ||
                  e.individualPosition === 'BOTTOM',
              ).championName,
            enemyFive: info.participants
              .filter(
                (participant) =>
                  participant.teamId !==
                  info.participants.find(
                    (proPlayer) => proPlayer.summonerName === match.nick,
                  ).teamId,
              )
              .find(
                (e) =>
                  e.teamPosition === 'UTILITY' ||
                  e.individualPosition == 'UTILITY',
              ).championName,
            assists: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).assists,
            deaths: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).deaths,
            kills: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).kills,
            cs: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).totalMinionsKilled,
            gold: info.participants.find(
              (participant) => participant.summonerName === match.nick,
            ).goldEarned,
          },
        });
      }
    }
    this.prismaService.$disconnect();
  }
}

export default fillDb;
