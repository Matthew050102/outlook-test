Feature: Outlook Email Management

  Scenario: Send, verify and clear sent emails
    Given I am logged into Outlook
    When I send an email with random subject and content to the recipient
    Then the sent email subject should appear in the sent emails list
    And I clear the sent emails folder