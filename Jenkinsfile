pipeline {
    agent any

    tools {nodejs "NodeJS 18.12"}

    stages {

        stage('Git') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/e-Learning-by-SSE/nm-competence-repository-client.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }

        /*
        stage('Docker') {
            steps {
                sh 'mv docker/Dockerfile Dockerfile'
                script {
                    env.API_VERSION = '0.1'
                    echo "API: ${env.API_VERSION}"
                    dockerImage = docker.build 'e-learning-by-sse/nm-competence-client'
                    docker.withRegistry('https://ghcr.io', 'github-ssejenkins') {
                        dockerImage.push("${env.API_VERSION}")
                        dockerImage.push('latest')
                    }
                }
            }
        }
        */

        /*
        stage('Deploy') {
            steps {
                sshagent(credentials: ['Stu-Mgmt_Demo-System']) {
                    // [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                    // ssh-keyscan -t rsa,dsa example.com >> ~/.ssh/known_hosts
                    sh "ssh -i ~/.ssh/id_rsa_student_mgmt_backend ${DEMO_SERVER_USER}@${env.DEMO_SERVER} ${REMOTE_UPDATE_SCRIPT}"
                }
           
            }
        }
        */
    }

    post {
        always {
             // Send e-mails if build becomes unstable/fails or returns stable
             // Based on: https://stackoverflow.com/a/39178479
             load "$JENKINS_HOME/.envvars/emails.groovy"
             step([$class: 'Mailer', recipients: "${env.elsharkawy}, ${env.wenzel}", notifyEveryUnstableBuild: true, sendToIndividuals: false])

             // Report static analyses
             recordIssues enabledForFailure: false, tool: checkStyle(pattern: 'output/eslint/eslint.xml')
        }
    }
}
