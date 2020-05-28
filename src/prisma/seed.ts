// prisma seed -r

import { prisma } from '../generated/prisma-client';

// create example user with example relation
// create example company with example pattern and example relations
async function main() {

let testUser1 =  await prisma.createUser({
    firstName: 'firstnameTest1',
    lastName: 'lastnameTest1',
    email: 'test1@test1.de',
    password: 'test1',
    role: "ADMIN",
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

let testTableProject1 = await prisma.createTable({
  key_partner_entry_ids: {
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
  reventue_stream_entry_ids: {
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

let testCanvas1Project1 = await prisma.createCanvas({
  name: "TestCanvas1",
  project_id: {connect: {id: testProjectUser1.id}},
  table_id: {connect: {id: testTableProject1.id}},
  createdBy: {connect: {id: testUser1.id}},
  updatedBy: {connect: {id: testUser1.id}}
})


// start pattern definition

let testTablePattern1 = await prisma.createTable({
  key_partner_entry_ids: {
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
  reventue_stream_entry_ids: {
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
  table_id: {connect: {id: testTablePattern1.id}},
  description: "Test Description 1",
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
// --------------------------------------------------------------------
}
main().catch(e => console.error(e))