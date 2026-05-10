export interface IAuth{
    id: number
    login: string,
    parol: string,
    ban: boolean
}

export const AUTHDATA: IAuth[] = [
    {
        id : 1,
        ban : false,
        login : "Starista",
        parol: '192ST'

    },
  {
        id : 2,
        ban : false,
        login : "Toshpulatova",
        parol: 'Tsh1238'

    },
  {
        id : 3,
        ban : false,
        login : "Marxabo",
        parol: '44M34R'

    },
{
        id : 4,
        ban : false,
        login : "Lola01",
        parol: 'Lola102'

    },
]
