import React from 'react'
import { Table, Flag } from 'semantic-ui-react'

const spieler = [
  { nr: "1", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "2", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "3", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "4", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "5", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "6", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "7", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "8", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "9", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },

]

export default  () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nr.</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Vorname</Table.HeaderCell>
        <Table.HeaderCell>PassNr.</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {spieler.map(spielerI => (
        <Table.Row>
          <Table.Cell>{spielerI.nr}</Table.Cell>
          <Table.Cell>{spielerI.name}</Table.Cell>
          <Table.Cell>{spielerI.vorname}</Table.Cell>
          <Table.Cell>{spielerI.passnr}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)
