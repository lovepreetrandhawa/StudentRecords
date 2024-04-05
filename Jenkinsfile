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
                    // Install dependencies
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests
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
                    // Build the application
                    bat 'npm run build'
                }
            }
            post {
                success {
                    echo 'Build successful!'
                }
                failure {
                    echo 'Build failed!'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Start the application
                    bat 'npm start'
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
