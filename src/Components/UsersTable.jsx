import { Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UsersTable = ({ users }) => {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <Link href={`users/${user._id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                    <Link href={``}>
                      <Button variant="outline">Edit</Button>
                    </Link>
                    <Link href={``}>
                      <Button variant="danger">Delete</Button>
                    </Link>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;
