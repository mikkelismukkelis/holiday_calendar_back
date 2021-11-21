const { getConnection, sql } = require('../database/connection')
const queries = require('../database/queries')

const getUsers = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllUsers)
    res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const checkUserCountByName = async (req, res) => {
  const { title } = req.body
  // console.log(`title`, title)

  // validating
  if (title == null) {
    return res.status(400).json({ msg: 'Bad Request. Missing information.' })
  }

  try {
    const pool = await getConnection()

    const result = await pool.request().input('title', title).query(queries.checkUserCountByName)

    // console.log(result.recordset[0].count)
    res.send(result.recordset[0])
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addNewUser = async (req, res) => {
  const { group_id, title } = req.body

  try {
    const pool = await getConnection()

    const result = await pool.request().input('title', title).input('group_id', group_id).query(queries.checkUserCountByNameAndGroup)

    const userCount = result.recordset[0].count

    // console.log(userCount)

    if (userCount === 0) {
      await pool.request().input('group_id', sql.Int, group_id).input('title', sql.Text, title).query(queries.addNewUser)

      res.json({ group_id, title })
    } else {
      res.json({ message: 'UserFoundFromDatabase' })
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const pool = await getConnection()

    const result = await pool.request().input('id', req.params.id).query(queries.getUserById)
    return res.json(result.recordset[0])
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

exports.getUsers = getUsers
exports.checkUserCountByName = checkUserCountByName
exports.addNewUser = addNewUser
exports.getUserById = getUserById
