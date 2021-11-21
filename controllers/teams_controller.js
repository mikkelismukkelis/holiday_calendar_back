const { getConnection, sql } = require('../database/connection')
const queries = require('../database/queries')

const getTeams = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getAllTeams)
    res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getTeamIdByTitleId = async (req, res) => {
  const { team } = req.body

  const teamTitleId = team.split(' ').join('_').toLowerCase()

  try {
    const pool = await getConnection()
    const result = await pool.request().input('teamTitleId', teamTitleId).query(queries.getTeamIdByTitleId)
    res.json(result.recordset)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addNewTeam = async (req, res) => {
  const { title } = req.body

  const title_id = title.split(' ').join('_').toLowerCase()

  try {
    const pool = await getConnection()

    const result = await pool.request().input('title_id', title_id).query(queries.checkTeamCountByTitleId)

    const teamCount = result.recordset[0].count

    if (teamCount === 0) {
      await pool.request().input('title', title).input('title_id', title_id).query(queries.addNewTeam)

      res.json({ title, title_id })
    } else {
      res.json({ message: 'TeamFoundFromDatabase' })
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

exports.getTeams = getTeams
exports.getTeamIdByTitleId = getTeamIdByTitleId
exports.addNewTeam = addNewTeam
