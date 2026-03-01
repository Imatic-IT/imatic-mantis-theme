<?php

class ImaticThemePlugin extends MantisPlugin
{
    public function register(): void
    {
        $this->name = 'Imatic theme';
        $this->description = 'Theme';
        $this->version = '0.2.2';
        $this->requires = [
            'MantisCore' => '2.0.0',
        ];

        $this->author = 'Imatic Software s.r.o.';
        $this->contact = 'info@imatic.cz';
        $this->url = 'https://www.imatic.cz/';
    }

    public function hooks(): array
    {
        return [
            'EVENT_LAYOUT_RESOURCES' => 'layout_resources_hook',
            'EVENT_VIEW_BUG_DETAILS' => 'bug_view_details',
            'EVENT_LAYOUT_BODY_END' => 'layout_body_end_hook',
        ];
    }

    function bug_view_details()
    {
        global $p_flags;

        if (!isset($_GET['id'])) {
            return;
        }
        $p_bug_id = (int)$_GET['id'];

        $t_data = array(
            'query' => array('id' => $p_bug_id),
        );

        $t_cmd = new IssueViewPageCommand($t_data);
        $t_result = $t_cmd->execute();

        $t_flags = $t_result['flags'];

        if ($t_flags['can_update']) {
            echo '<div id="imaticEditBugButton" class="btn-group pull-left">';
            html_button(string_get_bug_update_page(), lang_get('update_bug_button'), array('bug_id' => $p_bug_id));
            echo '</div>';
        }
    }

    public function layout_resources_hook()
    {

        return '<link rel="stylesheet" type="text/css" href="' . plugin_file('styles.css') . '&v=' . $this->version . '" />';
    }

    public function layout_body_end_hook($p_event)
    {
        echo '<script  src="' . plugin_file('index.js') . '&v=' . $this->version . '" defer></script>';
    }
}