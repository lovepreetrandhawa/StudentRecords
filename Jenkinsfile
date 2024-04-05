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
                    bat 'npm test'
                }
            }
            post {
                success {
                    echo 'Tests passed successfully!'
                }
                failure {
                    echo 'Tests failed!'
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

        stage('Deploy') {
            steps {
                script {
                    bat 'npm run build -- -p 3000'
                }
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
