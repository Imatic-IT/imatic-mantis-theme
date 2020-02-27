<?php

class ImaticThemePlugin extends MantisPlugin
{
	public function register(): void
	{
		$this->name = 'Imatic theme';
		$this->description = 'Theme';
		$this->version = '0.0.1';
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
		];
	}

	public function layout_resources_hook()
	{
		return '<link rel="stylesheet" type="text/css" href="' . plugin_file('styles.css') . '&v=' . $this->version . '" />';
	}
}
