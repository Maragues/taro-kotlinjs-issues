#!/usr/bin/env groovy

library 'kolibree-lib'

final IS_MAIN_BRANCH = env.BRANCH_NAME == 'master'
final IS_PR_BRANCH = env.BRANCH_NAME.startsWith('PR-')

pipeline {
    agent none

    stages {
        stage('cancel older PR builds') {
            when {
                beforeAgent true
                expression { return buildCause.isScm() && IS_PR_BRANCH }
            }
            steps {
                kolibree buildCancel.cancelOlderRunningBuilds()
            }
        }

        stage('build android app') {
            agent {
                kubernetes {
                    label agentUtilities.getDynamicAgentLabel('android')
                    defaultContainer 'android-sdk'
                    yamlFile 'KubernetesPod.yaml'
                }
            }

            steps {
                sh './gradlew assembleDebug'
            }

            post {
                success {
                    archiveArtifacts artifacts: 'android-app/build/outputs/apk/debug/**'
                }
            }
        }
    }
}
