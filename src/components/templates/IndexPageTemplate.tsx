import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as React from 'react';

import MyLink from '../MyLink';
import PageSection from '../PageSection';

type Props = {
  projects: ApiResponse<View$Project[]>;
};

const IndexPageTemplate: React.VFC<Props> = ({ projects }) => {
  if (!projects.data) {
    return null;
  }

  return (
    <PageSection title="プロジェクト">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="80" align="center">
              ID
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Revision</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.data?.map((p) => (
            <TableRow key={p.id}>
              <TableCell align="center">
                <MyLink to={`/projects/${p.id}`}>{p.id}</MyLink>
              </TableCell>
              <TableCell>
                <MyLink to={`/projects/${p.id}`}>{p.name}</MyLink>
              </TableCell>
              <TableCell>{p.revision}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageSection>
  );
};

IndexPageTemplate.displayName = 'IndexPageTemplate';

export default IndexPageTemplate;
