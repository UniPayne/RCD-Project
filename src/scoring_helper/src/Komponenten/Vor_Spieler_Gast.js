import React from 'react'
import { Table, Flag } from 'semantic-ui-react'
import '../CSS/spieler.css';

const spieler = [
  { nr: "1", name: 'Wolfgang', vorname: 'Felix', posNr:"1", passnr:"1548" },
  { nr: "2", name: 'Mooon', vorname: 'Torsten', posNr:"2", passnr:"4685" },
  { nr: "3", name: 'Deus', vorname: 'Anton', posNr:"3", passnr:"7859" },
  { nr: "4", name: 'McClark', vorname: 'Max', posNr:"4", passnr:"6587" },
  { nr: "5", name: 'Straberg', vorname: 'Nicko', posNr:"5", passnr:"7852" },
  { nr: "6", name: 'Fischer', vorname: 'Adam', posNr:"6", passnr:"1254" },
  { nr: "7", name: 'Hornbach', vorname: 'Sanches', posNr:"7", passnr:"2365" },
  { nr: "8", name: 'Klitschko', vorname: 'Witali', posNr:"8", passnr:"4785" },
  { nr: "9", name: 'Verstapen', vorname: 'Max', posNr:"9", passnr:"5698" },

]


export default  () => (
  <Table className="spie">
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
