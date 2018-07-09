import React from 'react'
import { Table, Flag } from 'semantic-ui-react'
import '../CSS/spieler.css';
//Werde hier keine Änderungen machen, diese Klasse wird höchstwahrscheinlich entfernt.
const spieler = [
  { nr: "1", name: 'Jansen', vorname: 'Tobias', posNr:"1", passnr:"1548" },
  { nr: "2", name: 'Schütte', vorname: 'Hans', posNr:"2", passnr:"4685" },
  { nr: "3", name: 'Schröder', vorname: 'Peter', posNr:"3", passnr:"7859" },
  { nr: "4", name: 'Müller', vorname: 'Simon', posNr:"4", passnr:"6587" },
  { nr: "5", name: 'Becker', vorname: 'Tom', posNr:"5", passnr:"7852" },
  { nr: "6", name: 'Jürgens', vorname: 'Nick', posNr:"6", passnr:"1254" },
  { nr: "7", name: 'Panitz', vorname: 'Anton', posNr:"7", passnr:"2365" },
  { nr: "8", name: 'Viet', vorname: 'Daniel', posNr:"8", passnr:"4785" },
  { nr: "9", name: 'Droste', vorname: 'Bastian', posNr:"9", passnr:"5698" },

]

export default  () => (
  <Table className="spie_spieler">
    <Table.Header className="header">
      <Table.Row>
        <Table.HeaderCell>Nr.</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Vorname</Table.HeaderCell>
        <Table.HeaderCell>PosNr.</Table.HeaderCell>
        <Table.HeaderCell>PassNr.</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {spieler.map(spielerI => (
        <Table.Row className="tabInhalt">
          <Table.Cell>{spielerI.nr}</Table.Cell>
          <Table.Cell>{spielerI.name}</Table.Cell>
          <Table.Cell>{spielerI.vorname}</Table.Cell>
          <Table.Cell>{spielerI.posNr}</Table.Cell>
          <Table.Cell>{spielerI.passnr}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)
