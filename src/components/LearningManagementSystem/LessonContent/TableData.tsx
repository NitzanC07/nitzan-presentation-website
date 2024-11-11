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
    <TableContainer overflowX={"auto"} maxW={"70%"} mx={"auto"}>
      <Table
        variant={"simple"}
        width={"100%"}
        mx={"auto"}
        mt={0}
        mb={10}
        size="sm"
      >
        {caption && (
          <TableCaption
            placement="top"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#532E1C"
            }}
            fontFamily="var(--font-varela_round)"
          >
            {caption}
          </TableCaption>
        )}
        <Thead>
          <Tr bgColor={"#532E1C"}>
            {headingRow.map((cell, i) => (
              <Th
                key={i}
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: 'white',
                  border: 0
                }}
                fontFamily="var(--font-varela_round)"
              >
                {cell}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr 
              key={i} 
              bgColor={i%2 === 0 ? '#ffffff66' : '#ffffff88'} 
              _hover={{bgColor: '#C5A88044'}}
              transition={"0.7s"}
              borderBottom={'1px solid #532E1C'}
            >
              {row.map((cell, j) => (
                <Td
                  key={j}
                  style={{
                    fontSize: "15px",
                    lineHeight: "20px",
                    textWrap: "wrap",
                    textAlign: "start"
                  }}
                  border={0}
                >
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
