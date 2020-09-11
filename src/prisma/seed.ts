// prisma seed -r

import { prisma, Strategy, StrategyPattern, Pattern } from '../generated/prisma-client';
import { generateSHA512Hash } from '../auth/Cryptography';
let bmodelData = require("./seedData/bmodel-converted.json");
let strategyData = require("./seedData/strategie-converted.json");

// create example user with example relation
// create example company with example pattern and example relations
async function main() {

let testUser1 =  await prisma.createUser({
    firstName: 'firstnameTest1',
    lastName: 'lastnameTest1',
    email: 'test1@test1.de',
    password: generateSHA512Hash('test1'),
    role: "ADMIN",
    project_ids: {}
})

let testUser2 =  await prisma.createUser({
  firstName: 'firstnameTest2',
  lastName: 'lastnameTest2',
  email: 'test2@test2.de',
  password: generateSHA512Hash('test1'),
  role: "USER",
  project_ids: {}
})


let testProjectUser1 = await prisma.createProject({
  user_id: {connect: {id: testUser1.id}},
  name: "TestProject1",
  createdBy: {connect: {id: testUser1.id}},
  updatedBy: {connect: {id: testUser1.id}}

})

let testProjectUser2 = await prisma.createProject({
  user_id: {connect: {id: testUser1.id}},
  name: "TestProject2",
  createdBy: {connect: {id: testUser1.id}},
  updatedBy: {connect: {id: testUser1.id}}

})

let testProjectUser3 = await prisma.createProject({
  user_id: {connect: {id: testUser2.id}},
  name: "TestProject3",
  createdBy: {connect: {id: testUser2.id}},
  updatedBy: {connect: {id: testUser2.id}}

})

let testTableProject1 = await prisma.createTable({
  actor_entry_ids: {
    create: [
      {
        text: "example text for canvas in key_partner_entry_ids 1",
        note: "example note  for canvas in key_partner_entry_ids  1",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
      {
        text: "example text  for canvas in key_partner_entry_ids  2",
        note: "example note  for canvas in key_partner_entry_ids  2",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
    ]
  },
  value_proposition_entry_ids: {
    create: [
      {
        text: "example text for canvas in reventue_stream_entry_ids 1",
        note: "example note for canvas in reventue_stream_entry_ids 1",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
      {
        text: "example text for canvas in reventue_stream_entry_ids 2",
        note: "example note for canvas in reventue_stream_entry_ids 2",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
    ]
  }
})

// create Strategies
let tmpStrategies : Strategy[] = [];
let strategyNames = Object.keys(strategyData[0]);
// a=1 since the first propertie = constant "Business-Model-Name"
for (let a = 1; a < strategyNames.length; a++)
{
  let tmpStrat = await prisma.createStrategy({
      name: strategyNames[a],
      description: "test description",
      createdBy: {connect: {id: testUser1.id}},
      updatedBy: {connect: {id: testUser1.id}}
  });
  tmpStrategies.push(tmpStrat);
}


// start pattern definition

let testTablePattern1 = await prisma.createTable({
  actor_entry_ids: {
    create: [
      {
        text: "example text for pattern in key_partner_entry_ids 1",
        note: "example note  for pattern  in key_partner_entry_ids 1",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
      {
        text: "example text for pattern in key_partner_entry_ids 2 ",
        note: "example note for pattern in key_partner_entry_ids2",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
    ]
  },
  value_proposition_entry_ids: {
    create: [
      {
        text: "example text pattern reventue_stream_entry_ids 1",
        note: "example note pattern reventue_stream_entry_ids 1",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
      {
        text: "example text pattern reventue_stream_entry_ids 2",
        note: "example note pattern reventue_stream_entry_ids 2",
        createdBy: {connect: {id: testUser1.id}},
        updatedBy: {connect: {id: testUser1.id}}
      },
    ]
  }
})


let testPatternUser1 = await prisma.createPattern({
  name: "Test Pattern1",
  description: "Test Description 1",

  table_id: {connect: {id: testTablePattern1.id}},

  actorWeight: 0,
  valuePropositionWeight: 0,
  valueCreationWeight: 0,
  valueDeliveryWeight: 0,
  revenueWeight: 0,
  expenseWeight: 0,
  networkEffectWeight: 0,
  regulatoryWeight: 0,
  technicalInfrastructureWeight: 0,

  createdBy: {connect: {id: testUser1.id}},
  updatedBy: {connect: {id: testUser1.id}}
})

let testCompany1Pattern1 = await prisma.createCompany({
  name: "TestCompany1",
  description: "test description for TestCompany1",
  pattern_ids: {connect:[
    {id: testPatternUser1.id}
  ]}
})


// create pattern
interface PatternWithStrategyData{
  strategyData: Object,
  patternObject: Pattern
}
let tmpPattern: PatternWithStrategyData[] = [];
for (let i = 0; i < bmodelData.length; i++)
{

    let tmpTable = await prisma.createTable({});

    tmpPattern.push(
      {
        // since filter will return list with 1 element, we take this element out of the list
        strategyData: strategyData.filter(a => a["Business-Model-Name"] === bmodelData[i]["Business-Model-Name"])[0],
        patternObject: await prisma.createPattern({
            name: bmodelData[i]["Business-Model-Name"],
            description: "tmp test description",

            table_id: {connect: {id: tmpTable.id}},

            actorWeight: Number(bmodelData[i]["Akteure"]),
            valuePropositionWeight: Number(bmodelData[i]["Wertversprechen"]),
            valueCreationWeight: Number(bmodelData[i]["Wertschoepfung"]),
            valueDeliveryWeight: Number(bmodelData[i]["Wertbereitstellung"]),
            revenueWeight: Number(bmodelData[i]["Erloese"]),
            expenseWeight: Number(bmodelData[i]["Ausgaben"]),
            networkEffectWeight: Number(bmodelData[i]["Netzwerkeffekte"]),
            regulatoryWeight: Number(bmodelData[i]["Regulatorisches"]),
            technicalInfrastructureWeight: Number(bmodelData[i]["Technische Infrastruktur"]),
            createdBy: {connect: {id: testUser1.id}},
            updatedBy: {connect: {id: testUser1.id}}
        })
      }
    );
}



// create StrategyPattern
for (let a = 0; a < tmpPattern.length; a++)
{
  let currentPattern = tmpPattern[a];
  for (let b = 0; b < tmpStrategies.length; b++)
  {
    let currentStrategy = tmpStrategies[b];
    let strategyPatternRef = await prisma.createStrategyPattern({
      weight: Number(currentPattern.strategyData[currentStrategy.name]),
      pattern_id: {connect: {id: currentPattern.patternObject.id}},
      strategy_id: {connect: {id: currentStrategy.id}},
    });
  }
}

// create Canvas and assign one random strategy to it
// create canvas and assign one random pattern to it
let testCanvas1Project1 = await prisma.createCanvas({
  name: "TestCanvas1",
  project_id: {connect: {id: testProjectUser1.id}},
  table_id: {connect: {id: testTableProject1.id}},
  pattern_ids: {connect:[ {id: tmpPattern[0].patternObject.id} ]},
  strategy_id: {connect: {id: tmpStrategies[0].id}},
  createdBy: {connect: {id: testUser1.id}},
  updatedBy: {connect: {id: testUser1.id}}
})


// --------------------------------------------------------------------
}
main().catch(e => console.error(e))