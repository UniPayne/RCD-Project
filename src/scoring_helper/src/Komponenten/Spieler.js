import React from 'react'
import { Table, Flag } from 'semantic-ui-react'
import './spieler.css';

const spieler = [
  { nr: "1", name: 'Jansen', vorname: 'Tobias', passnr:"1548" },
  { nr: "2", name: 'Schütte', vorname: 'Hans', passnr:"4685" },
  { nr: "3", name: 'Schröder', vorname: 'Peter', passnr:"7859" },
  { nr: "4", name: 'Müller', vorname: 'Simon', passnr:"6587" },
  { nr: "5", name: 'Becker', vorname: 'Tom', passnr:"7852" },
  { nr: "6", name: 'Jürgens', vorname: 'Nick', passnr:"1254" },
  { nr: "7", name: 'Panitz', vorname: 'Anton', passnr:"2365" },
  { nr: "8", name: 'Viet', vorname: 'Daniel', passnr:"4785" },
  { nr: "9", name: 'Droste', vorname: 'Bastian', passnr:"5698" },

]

export default  () => (
  <Table className="spie">
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
