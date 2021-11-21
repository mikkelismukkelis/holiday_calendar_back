const { getConnection, sql } = require('../database/connection')
const queries = require('../database/queries')

const getItems = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllItems)
    res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addNewItem = async (req, res) => {
  const { group, title, start_time, end_time } = req.body

  // console.log(group, title, start_time, end_time)

  // validating
  if (group == null || title == null || start_time == null || end_time == null) {
    return res.status(400).json({ msg: 'Bad Request. Missing information.' })
  }

  try {
    const pool = await getConnection()

    await pool
      .request()
      .input('group', sql.Int, group)
      .input('title', sql.Text, title)
      .input('start_time', sql.Text, start_time)
      .input('end_time', sql.Text, end_time)
      .query(queries.addNewItem)

    res.json({ group, title, start_time, end_time })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteItemById = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().input('id', req.params.id).query(queries.deleteItemById)
    // console.log(`result`, result.rowsAffected)
    return res.json({ deleted: result.rowsAffected[0] })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const replaceItemById = async (req, res) => {
  const id = req.params.id
  const { group, title, start_time, end_time } = req.body

  // validating
  if (group == null || title == null || start_time == null || end_time == null) {
    return res.status(400).json({ message: 'Bad Request. Missing information.' })
  }

  try {
    const pool = await getConnection()

    await pool
      .request()
      .input('id', id)
      .input('group', sql.Int, group)
      .input('title', sql.Text, title)
      .input('start_time', sql.Text, start_time)
      .input('end_time', sql.Text, end_time)
      .query(queries.replaceItemById)

    res.json({ group, title, start_time, end_time })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

exports.getItems = getItems
exports.addNewItem = addNewItem
exports.deleteItemById = deleteItemById
exports.replaceItemById = replaceItemById
