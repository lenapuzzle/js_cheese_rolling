// generate a random integer between 10 and 60
let generateRandomRolltime = () => {
    return Math.floor(Math.random() * (60 - 10 + 1) + 10)
}

let rawDataArray = [{
        cheeseName: 'Red Leicester',
        cheeseDeliciousness: 9,
        contestantName: 'John C',
        contestantHunger: 8
    },
    {
        cheeseName: 'Tilsit',
        cheeseDeliciousness: 3,
        contestantName: 'Michael P',
        contestantHunger: 10
    },
    {
        cheeseName: 'Caerphilly',
        cheeseDeliciousness: 5,
        contestantName: 'Eric I',
        contestantHunger: 2
    },
    {
        cheeseName: 'Bel Paese',
        cheeseDeliciousness: 4,
        contestantName: 'Graham C',
        contestantHunger: 4
    },
    {
        cheeseName: 'Red Windsor',
        cheeseDeliciousness: 9,
        contestantName: 'Terry G',
        contestantHunger: 6
    },
    {
        cheeseName: 'Stilton',
        cheeseDeliciousness: 7,
        contestantName: 'Terry J',
        contestantHunger: 1
    },
    {
        cheeseName: 'Gruyere',
        cheeseDeliciousness: 2,
        contestantName: 'Carol C',
        contestantHunger: 6
    }
]

let registerContestants = () => {

    let contestantArray = rawDataArray.map(contestant => {
        let contestantObject = {
            name: contestant.contestantName,
            hunger: contestant.contestantHunger,
            cheese: {
                name: contestant.cheeseName,
                deliciousness: contestant.cheeseDeliciousness

                //   return rawDataArray.map(contestant => ({

                //     name: contestantName[i],
                //     hunger: contestantHunger[i],
                //     cheese: { 
                //        name: cheeseName[i], 
                //        deliciousness: cheeseDeliciousness[i] }
                // }))

            },
            isDisqualified: false,
            results: [],
            checkForCheeseEating() {
                let average = (this.hunger + this.cheese.deliciousness) / 2
                if (average >= 7) {
                    this.isDisqualified = true
                }
            },
            rollDatCheese() {
                if (!this.isDisqualified) {
                    let time = generateRandomRolltime()
                    this.results.push(time)
                    console.log(time)
                }
            },
            reportIndividualResults() {
                let report = `Contestant ${this.name} entered this competition with a lovely ${this.cheese.name} cheese.`
                if (this.isDisqualified) {
                    report += " Unfortunately, their cheese got the better of them and they were disqualified."
                } else {
                    report += ` By meeting the criteria, they were able to compete with resulting scores of ${this.results.join(", ")}.`
                }
                return report
            }
        }
        return contestantObject
    })
    return contestantArray
}

let contestants = registerContestants()

//console.log('Iterating through contestants')
contestants.forEach(contestant => {
        contestant.checkForCheeseEating()
        for (let i = 0; i < 3; i++) {
            contestant.rollDatCheese()
        }
        let results = contestant.reportIndividualResults()
        console.log(results)
    })
    // contestants[1].checkForCheeseEating()
    // contestants[1].rollDatCheese()
    // console.log(contestants)