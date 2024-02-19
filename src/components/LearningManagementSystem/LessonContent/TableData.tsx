import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

interface TableDataProps {
  caption: string;
  headingRow: string[];
  rows: (string | number)[][];
}

function TableData({ caption, headingRow, rows }: TableDataProps) {
  return (
    <TableContainer overflowX={'auto'} maxW={'70%'} mx={'auto'}>
      <Table
        variant={"striped"}
        colorScheme="orange"
        width={"100%"}
        mx={"auto"}
        my={5}
        size="sm"
      >
        {caption && <TableCaption placement="top">{caption}</TableCaption>}
        <Thead>
          <Tr bgColor={"gray.200"}>
            {headingRow.map((cell, i) => (
              <Th
                key={i}
                style={{
                  fontFamily: "Varela Round",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                
              >
                {cell}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i}>
              {row.map((cell, j) => (
                <Td key={j} style={{ fontFamily: "Varela Round", 'fontSize': '15px'}}>
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
}

export default TableData;
