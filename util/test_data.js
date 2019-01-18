
const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
const _ = require('lodash')

const configPath = path.join(path.dirname(__dirname), 'config')

class TestData {
    static load (environment) {
        TestData.environment = environment || 'stage'
        console.log(`Loading test data for ${TestData.environment} environment...`)

        let configData
        let testData

        try {
            const cdFile = path.join(configPath, `cd_${TestData.environment}.yml`)
            configData = yaml.safeLoad(fs.readFileSync(cdFile, 'utf8'))
        } catch (error) {
            console.log(`Unable to log config data for ${TestData.environment}!`)
            throw error
        }

        try {
            const tdFile = path.join(configPath, `td_${TestData.environment}.yml`)
            testData = yaml.safeLoad(fs.readFileSync(tdFile, 'utf8'))
        } catch (error) {
            console.log(`Unable to load ${TestData.environment} test data!`)
            throw error
        }

        try {
            TestData.data = _.merge(configData, testData)
        } catch (error) {
            console.log('Unable to load test data!')
            console.log(error)
        }
       }

       static getUser (userId) {
           return TestData.data.users[userId]
       }

       static getBaseUrl () {
           return TestData.data.url
       }
      }


      module.exports = TestData