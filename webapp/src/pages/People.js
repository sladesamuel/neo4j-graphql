import React from "react"
import { gql, useQuery } from "@apollo/client"
import ContainerLayout from "../components/ContainerLayout"
import Content from "../components/Content"
import Title from "../components/Title"
import Loading from "../components/Loading"
import PeopleList from "../components/PeopleList"

const people = gql`
  query GetPeople {
    people {
      name
      born
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(people)

  return (
    <ContainerLayout>
      <Title text="People" />

      <Content>
        {error && <p>{error.message}</p>}

        <PeopleList people={(data && data.people) || []} />
        <Loading loading={loading} />
      </Content>
    </ContainerLayout>
  )
}
