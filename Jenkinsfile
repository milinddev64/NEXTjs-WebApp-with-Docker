// Building the pipeline

pipeline {
    agent {
        docker {
            image 'node:20-alpine'
            args '-p 3000:3000'
            // Set an absolute path for the working directory
            // Replace '/path/to/your/project' with the actual absolute path
            // where your Next.js project resides on your Jenkins agent.
            // For example, if it's in '/var/jenkins/workspace/my-nextjs-app',
            // replace the placeholder accordingly.
            // dir '/path/to/your/project'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Start Next.js App') {
            steps {
                sh 'npm start &'
            }
        }
        // stage('Deploy (Optional)') {
        //     steps {
        //         // Add deployment steps here (e.g., copying files to a web server)
        //     }
        // }
    }
}


// pipeline{
//     agent {
//         docker {
//             image 'node:20-alpine'
//             args '-p 3000:3000'
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        // stage('Deliver') {
        //     steps {
        //         sh './jenkins/scripts/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './jenkins/scripts/kill.sh'
        //     }
        // }
//     }
// }