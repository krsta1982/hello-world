import webdriver from 'selenium-webdriver'


config.platform = (process.env.platform) ? (process.env.platform) : 'CHROME'

export const buildChromeDriver = () => {
    return  new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build()
}

export const buildFireFoxDriver = () => {
    return new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build()
}

//TODO:@dxd continue here 
switch(config.platform){
    case 'FIREFOX':
    driver = buildFireFoxDriver()
    break
    default:
    driver = buildChromeDriver()


    
}