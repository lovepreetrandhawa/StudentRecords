pipeline {
    agent any

    tools {
        nodejs "NodeJS"
        git "Default"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

       stage('Run Tests') {
    steps {
        script {
            bat 'npm install'
            bat 'npm test -- --passWithNoTests'
        }
    }
}

        stage('Build') {
            steps {
                script {
                    bat 'npm run build'
                }
            }
        }
    }

    stage('Deploy') {
            steps {
                script {
                    bat 'npm run -p 80:3000 StudentRecords'
                }
            }
        }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
