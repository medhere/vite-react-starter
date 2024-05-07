import { Divider, Grid, Pagination, Table } from "@mantine/core"
import { useXHR } from "../../libs/request";
import { IonSearchbar, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";



export const Pagination = () => {
  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(1)

  const users = useXHR('get', `users`, { search: null, items_per_page: 1, page: 1 }, true);

  const changePage = (page) => {
    users.send({ search, items_per_page: itemsPerPage, page })
  }

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  const clearSearch = () => {
    setSearch('');
    users.send({ search: '', items_per_page: itemsPerPage, page: 1 })
  }

  const sendSearch = () => {
    users.send({ search, items_per_page: itemsPerPage, page: 1 })
  }

  const perPage = (e) => {
    setItemsPerPage(e.target.value)
    users.send({ search, items_per_page: e.target.value, page: 1 })
  }

  return (
    <>

      <Grid>
        <Grid.Col lg={8} md={8} sm={12}>
          <IonSearchbar animated={true}
            showClearButton={true}
            placeholder="Search here"
            value={search}
            onIonInput={changeSearch}
            onIonClear={clearSearch}
          ></IonSearchbar>
        </Grid.Col>
        <Grid.Col lg={2} md={2} sm={6}>
          <IonSelect label='Per Page' placeholder='Per Page' onIonChange={perPage}>
            {[10, 20, 30, 40, 50].map((item, i) => <IonSelectOption key={i} value={item} >{item}</IonSelectOption>)}
          </IonSelect>
        </Grid.Col>
        <Grid.Col lg={2} md={2} sm={6}>
          <button className="btn" onClick={sendSearch}>Search</button>
        </Grid.Col>
      </Grid>

      <Divider my={20} size="md" label="Data" labelPosition="center" />
      <Table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.data && users?.data?.data.map((user, i) => (
            <tr key={i}>
              <td>{users?.data?.from + i}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Divider my={20} size="md" label="Pages" labelPosition="center" />
      <Grid>
        <Grid.Col lg={9} sm={12}>
          <Pagination
            value={users?.data?.current_page}
            onChange={changePage}
            siblings={2} boundaries={2}
            total={users?.data?.last_page}
          />
        </Grid.Col>
        <Grid.Col lg={3} sm={12}>
          Total Records: {users?.data?.total}
        </Grid.Col>
      </Grid>

    </>
  )
}


